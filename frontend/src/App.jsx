import React, { useState } from 'react';
import axios from 'axios';
import { templates } from './templates/blogTemplate';
import TemplateForm from './components/TemplateForm';
import TextEditor from './components/TextEditor';

function App() {
    const [selectedTemplateKey, setSelectedTemplateKey] = useState('blog');

  const [formData, setFormData] = useState({});

  const [stepIndex, setStepIndex] = useState(0);

  const [output, setOutput] = useState("");
  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const selectedTemplate = templates[selectedTemplateKey];


  const generatePrompt = () => {
    let prompt = '';
     selectedTemplate.steps.forEach((step) => {
      prompt += `### ${step.step}\n`;
      for (const [key, meta] of Object.entries(step.fields)) {
        prompt += `**${meta.description}**: ${formData[key] || '[Not provided]'}\n`;
      }
      prompt += '\n';
    });
    return prompt;
  };

 
  const handleGenerate = async () => {
    const prompt = generatePrompt();
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/generate/', { prompt });
      setOutput(res.data.content);
    } catch (error) {
      setOutput("Error generating content: " + error.message);
    }
  };


  const handleNext = () => {
    if (stepIndex <  selectedTemplate.steps.length - 1) {
      setStepIndex(stepIndex + 1);
    } else {
      handleGenerate();
    }
  };


  const handlePrevious = () => {
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
    }
  };

    const handleTemplateChange = (e) => {
    setSelectedTemplateKey(e.target.value);
    setFormData({});
    setStepIndex(0);
    setOutput('');
  };


  const OutputText = output?.parts && output.parts.length > 0
  ? output.parts[0].text
  : "No content generated yet."

  return (


        <div className="container py-4">
      <div className="mb-4">
        <label className="form-label fw-semibold">Select Template:</label>
        <select
          className="form-select"
          value={selectedTemplateKey}
          onChange={handleTemplateChange}
        >
          {Object.entries(templates).map(([key, template]) => (
            <option key={key} value={key}>
              {template.title}
            </option>
          ))}
        </select>
      </div>

      <TemplateForm
        template={selectedTemplate}
        values={formData}
        onChange={handleChange}
        stepIndex={stepIndex}
      />

      <div className="d-flex justify-content-between mt-4">
        <button
          onClick={handlePrevious}
          disabled={stepIndex === 0}
          className={`btn ${stepIndex === 0 ? 'btn-secondary disabled' : 'btn-dark'}`}
        >
          Previous
        </button>
        <button onClick={handleNext} className="btn btn-primary">
          {stepIndex === selectedTemplate.steps.length - 1 ? 'Generate' : 'Next'}
        </button>
      </div>

      {output && (
        <div className="mt-5 p-3 border rounded bg-light">
          <h4 className="mb-3 fw-bold">Generated Content:</h4>
          <TextEditor value={OutputText} editable={false} />
        </div>
      )}
    </div>
  );
}

export default App;
