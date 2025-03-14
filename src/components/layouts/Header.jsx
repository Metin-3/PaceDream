import { Col, Drawer, Row } from "antd";
import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { PiUserCircle } from "react-icons/pi";
import { useState } from "react";
import { BarsOutlined, CloseOutlined } from "@ant-design/icons";




const Header = () => {

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <header className="py-4 border-b border-gray-200">
      <div className="container">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className='items-center'>

          {/* Navbar left */}
          <Col xs={12} sm={12} md={4} lg={8} xl={8}>
            <div className="w-[150px] md:w-[180px]">
              <img src="./images/pacedream-logo.webp" className="w-full h-full object-cover" alt="" />
            </div>
          </Col>

          {/* Navbar middle */}
          <Col xs={12} sm={12} md={13} lg={8} xl={8} className="header-center-col">
            <ul className="header-center hidden md:flex justify-center gap-4">
              <li>
                <Link to="/" className="text-black hover:text-colorPrimary transition duration-300 font-bold text-[15px]">Find Roommate</Link>
              </li>
              <li>
                <Link to={"/"} className="text-black hover:text-colorPrimary transition duration-300 font-bold text-[15px]">About</Link>
              </li>
              <li>
                <Link to="/" className="text-black hover:text-colorPrimary transition duration-300 font-bold text-[15px]">Contact</Link>
              </li>
              <li>
                <Link to="/" className="text-black hover:text-colorPrimary transition duration-300 font-bold text-[15px]">USD</Link>
              </li>
            </ul>
            <div className="md:hidden flex justify-end px-3">
              <button className="border-none rounded-full bg-colorPrimary bg-opacity-5 text-colorPrimary w-[40px] h-[40px] flex justify-center items-center text-[22px] font-bold" onClick={showDrawer}>
                <BarsOutlined />
              </button>
            </div>
          </Col>

          {/* Navbar right */}
          <Col xs={8} sm={6} md={5} lg={8} xl={8} className="header-right hidden md:block">
            <div className="flex justify-end items-center gap-4">
              <button className="w-[37px] h-[37px] flex justify-center items-center border text-gray-500 border-gray-300 rounded-lg hover:bg-colorPrimary hover:border-colorPrimary hover:text-white transition duration-300 ">
                <IoMdNotificationsOutline size={30} />
              </button>
              <button className="bg-colorPrimary text-white px-5 py-2 rounded-lg hover:bg-transparent border border-colorPrimary transition-all duration-300 hover:text-colorPrimary">Become a host</button>
              <button className="w-[37px] h-[37px] flex justify-center items-center border border-gray-200 text-gray-500 bg-gray-200 rounded-lg hover:bg-transparent transition duration-300 "><PiUserCircle size={30} /></button>
            </div>
          </Col>

          <Drawer placement="left" title={<img src="./images/pacedream-logo.webp" width={150} />} onClose={onClose} open={open} closable={false} extra={<CloseOutlined onClick={onClose} />} className="lg:hidden">
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="/" className="text-black hover:text-colorPrimary transition duration-300 font-bold text-[15px]">Find Roommate</Link>
              </li>
              <li>
                <Link to={"/"} className="text-black hover:text-colorPrimary transition duration-300 font-bold text-[15px]">About</Link>
              </li>
              <li>
                <Link to="/" className="text-black hover:text-colorPrimary transition duration-300 font-bold text-[15px]">Contact</Link>
              </li>
              <li>
                <Link to="/" className="text-black hover:text-colorPrimary transition duration-300 font-bold text-[15px]">USD</Link>
              </li>
            </ul>
            <div className="flex  items-center mt-5 gap-4">
              <button className="w-[37px] h-[37px] flex justify-center items-center border text-gray-500 border-gray-300 rounded-lg hover:bg-colorPrimary hover:border-colorPrimary hover:text-white transition duration-300 ">
                <IoMdNotificationsOutline size={30} />
              </button>
              <button className="bg-colorPrimary text-white px-5 py-2 rounded-lg hover:bg-transparent border border-colorPrimary transition-all duration-300 hover:text-colorPrimary">Become a host</button>
              <button className="w-[37px] h-[37px] flex justify-center items-center border border-gray-200 text-gray-500 bg-gray-200 rounded-lg hover:bg-transparent transition duration-300 "><PiUserCircle size={30} /></button>
            </div>
          </Drawer>
        </Row>
      </div>
    </header>
  )
}

export default Header