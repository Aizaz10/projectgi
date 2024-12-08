const Contact = () => {
    return (
      <div className="contact py-16 text-center">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <form className="mt-8 max-w-lg mx-auto">
          <input type="text" placeholder="Name" className="w-full p-4 mb-4 border rounded-lg" />
          <input type="email" placeholder="Email" className="w-full p-4 mb-4 border rounded-lg" />
          <textarea placeholder="Message" className="w-full p-4 mb-4 border rounded-lg"></textarea>
          <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  