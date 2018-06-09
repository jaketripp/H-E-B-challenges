let axios = require("axios");
let expect = require("chai").expect;

describe("API", function() {
  it("should make an API call with no category", async () => {
    try {
      let { data } = await axios.get(`http://localhost:8080/search?term=apple`);
      expect(data.length).to.equal(1);

      let product = data[0];
      let { Description, lastSold, ShelfLife, Department } = product;

      expect(Description).to.equal("apples");
      expect(lastSold).to.equal("9/6/2017");
      expect(ShelfLife).to.equal("7d");
      expect(Department).to.equal("Produce");
    } catch (e) {
      throw new Error(e);
    }
  });
  
  it("should make an API call with a category", async () => {
    try {
      let { data } = await axios.get(`http://localhost:8080/search?term=9d&category=ShelfLife`);
      expect(data.length).to.equal(1);

      let product = data[0];
      let { Description, lastSold, ShelfLife, Department } = product;

      expect(Description).to.equal("onion");
      expect(lastSold).to.equal("9/8/2017");
      expect(ShelfLife).to.equal("9d");
      expect(Department).to.equal("Produce");
    } catch (e) {
      throw new Error(e);
    }
  });
});