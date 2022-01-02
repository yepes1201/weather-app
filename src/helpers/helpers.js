export const setOverflowBody = (modal) => {
  const bodyEl = document.getElementsByTagName("body")[0];
  if (modal) {
    bodyEl.classList.add("overflow-hidden");
  } else {
    bodyEl.classList.remove("overflow-hidden");
  }
};

export const responsiveSidebar = () => {
  const sidebar = document.getElementById("sidebar");
  const bodyEl = document.getElementsByTagName("body")[0];
  sidebar.classList.toggle("sidebar__responsive");
  bodyEl.classList.toggle("overflow-hidden");
};
