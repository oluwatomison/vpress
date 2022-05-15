import { shallow } from "enzyme";
import ProductComponent from "./productComponent";
import { checkProps, findByTestAttr } from "../../test/TestUtils";

const defaultProps = {
     image: "image url",
     price: "000",
     name: "test",
     rating: 0,
     onAdd: () => {
          console.log("Test button");
     },
};

/**
 * Function to render component
 * @function
 * @param {object} props - Accepts props for the required set-up
 * @return {ShallowWrapper} component-image,product-component
 *
 */

// Adding default props
const setup = (props = {}) => {
     const setupProps = { ...defaultProps, ...props };
     return shallow(<ProductComponent {...setupProps} />);
};

test("renders without error", () => {
     const wrapper = setup();
     const component = findByTestAttr(wrapper, "product-component");
     expect(component.length).toBe(1);
});

test("renders image", () => {
     const wrapper = setup();
     const imageURL = findByTestAttr(wrapper, "image-component");
     expect(imageURL.text()).toBe("");
});

test("renders the price", () => {
     const wrapper = setup();
     const price = findByTestAttr(wrapper, "price-component");
     expect(price.text()).toBe("000");
});

test("renders the title", () => {
     const wrapper = setup();
     const title = findByTestAttr(wrapper, "title-component");
     expect(title.text()).toBe("test");
});

test("renders the rating", () => {
     const wrapper = setup();
     const rating = findByTestAttr(wrapper, "rating-component");
     expect(rating.text()).toBe("");
});

test("does not throw warning with expected props", () => {
     const expectedProps = {
          image: "image url",
          price: "000",
          name: "test",
          rating: 0,
     };
     checkProps(ProductComponent, expectedProps);
});

test("renders submit button", () => {
     const wrapper = setup();
     const submitButton = findByTestAttr(wrapper, "submit-button");
     expect(submitButton.exists()).toBe(true);
});
