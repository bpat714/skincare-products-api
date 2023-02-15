exports.handler = async (event) => {
    try {
      const { Configuration, OpenAIApi } = require("openai");
  
      const configuration = new Configuration({
        apiKey: '',
      });
  
      const openai = new OpenAIApi(configuration);
  
      const prompt = `list of recommended products for` + event.step;
  
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
  
      return {
        statusCode: 200,
        body: JSON.stringify(response.data.choices[0].text),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: error.message }),
      };
    }
  };
  