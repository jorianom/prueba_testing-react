import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Table from "../components/Table";

configure({ adapter: new Adapter() });
describe("Test component Table", () => {
  let component, node, credit;
  beforeEach(() => (component = shallow(<Table />)));
  beforeEach(() => (node = component.find("table")));
  beforeEach(() => {
    credit = {
      n_cuotas: 12,
      valor_cuota: 14647,
    };
  });
  component = mount(
    <Table valor_cuota={credit.valor_cuota} n_cuotas={credit.n_cuotas} />
  );
  it("It should exist table tag", () => {
    expect(node).toBeTruthy();
  });
  it("it shoul render Table component", () => {
    let title = component.find(".title");
    expect(title.text()).toEqual("Valor total credito a pagar: 703092");

    let subtitle = component.find(".subtitle");
    expect(subtitle.text()).toEqual("Valor fijo de cuota: 14647 a 12 Meses");
  });
});
