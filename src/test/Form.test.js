import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Form from "../components/Form";

configure({ adapter: new Adapter() });
describe("Test component Form", () => {
  let componentForm, node;
  beforeEach(() => (componentForm = shallow(<Form />)));

  beforeEach(() => (node = componentForm.find("form")));
  it("It should exist form tag", () => {
    expect(node).toBeTruthy();
  });
});
