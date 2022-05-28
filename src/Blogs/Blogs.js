import React from "react";

const Blogs = () => {
  return (
    <section>
      <div>
        <h1 class="text-4xl font-bold">
          How will you improve the performance of a React Application?
        </h1>
        <p class="text-2xl">
          1 Spreading props on DOM elements <br></br> 2. Use React.Fragments to
          Avoid Additional HTML Element Wrappers <br></br> 3. Conditional
          rendering of components <br></br> 4. Removing unnecessary await and
          use Promise.all() <br></br> 5. Function/Stateless Components and
          React.PureComponent
        </p>
      </div>
      <div>
        <h1 class="text-4xl font-bold">
          What are the different ways to manage a state in a React application?
        </h1>
        <p class="text-2xl">
          React uses an observable object as the state that observes what
          changes are made to the state and helps the component behave
          accordingly. For example, if we update the state of any component like
          the following the webpage will not re-render itself because React
          State will not be able to detect the changes made
        </p>
      </div>

      <div>
        <h1 class="text-4xl font-bold">
          How does prototypical inheritance work?
        </h1>
        <p class="text-2xl">
          Prototype-based programming is a style of object-oriented programming
          in which behaviour reuse (known as inheritance) is performed via a
          process of reusing existing objects that serve as prototypes. This
          model can also be known as prototypal, prototype-oriented, classless,
          or instance-based programming.
        </p>
      </div>
      <div>
        <h1 class="text-4xl font-bold">
          Why you do not set the state directly in React. For example, if you
          have const [products, setProducts] = useState([]). Why you do not set
          products = [...] instead, you use the setProducts
        </h1>
        <p class="text-2xl">
          A good product description should focus on the product's features and
          benefits. Obviously, the features are a bit more clear cut. The
          benefits will require a bit more creativity and understanding of your
          target audience. However, both features and benefits allow for
          creative writing
        </p>
      </div>
      <div>
        <h1 class="text-4xl font-bold">
          You have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </h1>
        <p class="text-2xl">
          A product description is the marketing copy that explains what a
          product is and why it's worth purchasing. The purpose of a product
          description is to supply customers with important information about
          the features and benefits of the product so they're compelled to buy
        </p>
      </div>
    </section>
  );
};

export default Blogs;
