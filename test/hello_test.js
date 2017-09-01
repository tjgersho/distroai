import { expect } from 'chai';
import Hello from '../dev/js/Hello'

describe("A simple test", () => {
  let hello;

  beforeEach(() => {
    hello = new Hello({});
  });

  it("should return ten", () => {
    expect(hello.ten()).to.eq(10);
  });

});