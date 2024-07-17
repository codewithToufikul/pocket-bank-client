import logo from '../../assets/logo.png'

const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className=' menu bg-base-200 text-base-content min-h-full w-80 p-4'>
            <div className=' flex justify-center my-10'>
            <img className=' w-[140px]' src={logo} alt="" />
            </div>
          <ul className="">

            <li >
              <a>Sidebar Item 1</a>
            </li>
            <li >
              <a>Sidebar Item 2</a>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
