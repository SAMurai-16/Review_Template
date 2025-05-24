import React from 'react';
import TextEditor from './TextEditor';

function TemplateForm({ template, values, onChange, stepIndex }) {
  const step = template.steps[stepIndex];

  if (!step) return <div className="text-danger">No more steps.</div>;

  return (
    <div className="bg-white shadow-sm rounded border p-4">
      <h2 className="h4 text-primary mb-2">{step.step}</h2>
      <p className="text-muted mb-4 small">Fill in the fields below to guide AI content generation.</p>

      {Object.entries(step.fields).map(([key, field]) => (
        <div key={key} className="mb-4 p-3 border rounded bg-light">
          <label htmlFor={key} className="form-label fw-medium">
            {field.label}
          </label>

          <TextEditor
            value={values[key] || ''}
            onChange={(content) => onChange(key, content)}
            editable={true}
          />

          {field.description && (
            <div className="form-text mt-1">{field.description}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TemplateForm;
