export default class StringSearch {
  constructor(data, properties) {
    this.data = data;
    this.filters = {};
    this.query = "";
    this.properties = properties;
  }

  search() {
    if (this.query.length > 0) {
      let props = this.properties;
      let qur = this.query;
      return this.data.filter((dt) => {
        const foundKewords = new Set();

        for (let property in dt) {
          if (props.includes(property)) {
            for (let v = 0; v <= qur.length; v++) {
              let propVal = dt[property].toLowerCase();
              let val = qur[v];
              if (propVal.includes(val)) {
                foundKewords.add(val);
              }
            }
          }
        }

        return foundKewords.size >= qur.length;
      });
    }
  }

  sort() {}

  setQuery(query = "") {
    let qarr = query.trim().toLowerCase().split(" ");
    this.query = [...new Set(qarr)];

    return this;
  }

  setFilters(filters = {}) {
    this.filters = filters;
  }
}
