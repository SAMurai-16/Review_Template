const blogTemplate = {
  title: "Blog Post Generator",
  steps: [
    {
      step: "Step 1: Basic Info",
      fields: {
        title: { label: "Blog Title", description: "What's the title of your blog?" },
        audience: { label: "Target Audience", description: "Who are you writing for?" }
      }
    },
    {
      step: "Step 2: Style & Tone",
      fields: {
        tone: { label: "Tone", description: "Casual, formal, humorous, etc." },
        keywords: { label: "Keywords", description: "Enter SEO keywords (comma-separated)" }
      }
    },
    {
      step: "Step 3: Length & Call-to-Action",
      fields: {
        length: { label: "Length", description: "Approximate length (e.g., 500 words)" },
        cta: { label: "Call To Action", description: "What do you want the reader to do?" }
      }
    }
  ]
};


const productReviewTemplate = {
  title: "Product Review Generator",
  steps: [
    {
      step: "Step 1: Product Details",
      fields: {
        productName: { label: "Product Name", description: "What's the product called?" },
        productCategory: { label: "Category", description: "What type of product is it?" }
      }
    },
    {
      step: "Step 2: User Experience",
      fields: {
        pros: { label: "Pros", description: "What did you like about the product?" },
        cons: { label: "Cons", description: "What didn't you like?" }
      }
    },
    {
      step: "Step 3: Recommendation & Rating",
      fields: {
        recommendation: { label: "Recommendation", description: "Would you recommend this product? Why or why not?" },
        rating: { label: "Rating", description: "Rate the product from 1 to 5 stars" }
      }
    }
  ]
};



export const templates ={
    blog: blogTemplate,
    product:productReviewTemplate

}