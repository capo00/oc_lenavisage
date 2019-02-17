import React from "react";
import { shallow } from "enzyme";
import LenaVisage from "oc_lenavisageg01";

describe(`LenaVisage.App`, () => {
  it(`default props`, () => {
    const wrapper = shallow(<LenaVisage.App />);
    expect(wrapper).toMatchSnapshot();
  });
});
