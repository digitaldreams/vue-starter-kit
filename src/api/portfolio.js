export async function getPortfolios() {
  let portfolioList = await fetch("api/projects.json", {
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json());

  return portfolioList;
}
