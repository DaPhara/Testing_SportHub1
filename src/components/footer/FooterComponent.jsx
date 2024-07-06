import { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "flowbite-react";
import logo from "../../assets/SportHubLogo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

export function FooterComponent() {
  const [footerList, setFooterList] = useState([
    {
      name: "ទំព័រដើម",
      path: "/",
      active: true,
    },
    {
      name: "អំពីយើង",
      path: "/about-us",
      active: false,
    },
    {
      name: "ក្លឹបកីឡា",
      path: "/sport-club",
      active: false,
    },
    {
      name: "ព្រឹត្តិការណ៍",
      path: "/events",
      active: false,
    },
    {
      name: "ព័ត៌មាន",
      path: "/news",
      active: false,
    },
    {
      name: "ប្រវត្តិកីឡា",
      path: "/history",
      active: false,
    },
    {
      name: "តេលេក្រាម",
      path: "https://www.bing.com/images/search?view=detailV2&ccid=08jphDFp&id=DDA3272448D678F992790A9D69209BF6C0755827&thid=OIP.08jphDFpvqDDPyoEs9m9sQHaHa&mediaurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f15%2f1d%2fa9%2f151da98ceef9a9a54a7eac4af04be712.gif&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.d3c8e9843169bea0c33f2a04b3d9bdb1%3frik%3dJ1h1wPabIGmdCg%26pid%3dImgRaw%26r%3d0&exph=498&expw=498&q=cat+dance&simid=608034402032683724&FORM=IRPRST&ck=10C1327D4161B8205B899AE2F81A0ACD&selectedIndex=6&itb=0&ajaxhist=0&ajaxserp=0v",
      active: false,
    },
    {
      name: "លេខទូរសព្ទ",
      path: "https://www.bing.com/images/search?view=detailV2&ccid=08jphDFp&id=DDA3272448D678F992790A9D69209BF6C0755827&thid=OIP.08jphDFpvqDDPyoEs9m9sQHaHa&mediaurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f15%2f1d%2fa9%2f151da98ceef9a9a54a7eac4af04be712.gif&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.d3c8e9843169bea0c33f2a04b3d9bdb1%3frik%3dJ1h1wPabIGmdCg%26pid%3dImgRaw%26r%3d0&exph=498&expw=498&q=cat+dance&simid=608034402032683724&FORM=IRPRST&ck=10C1327D4161B8205B899AE2F81A0ACD&selectedIndex=6&itb=0&ajaxhist=0&ajaxserp=0v",
      active: false,
    },
    {
      name: "អីម៉ែល",
      path: "https://www.bing.com/images/search?view=detailV2&ccid=08jphDFp&id=DDA3272448D678F992790A9D69209BF6C0755827&thid=OIP.08jphDFpvqDDPyoEs9m9sQHaHa&mediaurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f15%2f1d%2fa9%2f151da98ceef9a9a54a7eac4af04be712.gif&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.d3c8e9843169bea0c33f2a04b3d9bdb1%3frik%3dJ1h1wPabIGmdCg%26pid%3dImgRaw%26r%3d0&exph=498&expw=498&q=cat+dance&simid=608034402032683724&FORM=IRPRST&ck=10C1327D4161B8205B899AE2F81A0ACD&selectedIndex=6&itb=0&ajaxhist=0&ajaxserp=0",
      active: false,
    },
  ]);

  const handleClick = (item) => {
    setFooterList((lists) =>
      lists.map((list) =>
        list.name === item.name
          ? { ...list, active: true }
          : { ...list, active: false }
      )
    );
  };

  const titlesList = [
    { title: "ស្វែងរក", startIndex: 0, endIndex: 3 },
    { title: "ផ្សេងៗ", startIndex: 3, endIndex: 6 },
    { title: "ទំនាក់ទំនង", startIndex: 6, endIndex: 9 },
  ];

  return (
    <section>
      <Footer className="bg-[#172554] rounded-none">
        <div className="w-full text-white">
          <hr className="mt-10 text-white" />
          <div className="flex flex-col container mx-auto py-[50px] mb-14 md:flex-row md:justify-between">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
              {titlesList.map((column, columnIndex) => (
                <div key={columnIndex} className="px-6">
                  <h4 className="text-lg font-semibold mb-4">{column.title}</h4>
                  <Footer.LinkGroup col>
                    {footerList
                      .slice(column.startIndex, column.endIndex)
                      .map((item, index) => (
                        <Link
                          to={item.path}
                          key={index}
                          onClick={() => handleClick(item)}
                        >
                          <span
                            className={
                              item.active ? "text-blue-500" : "text-white"
                            }
                          >
                            {item.name}
                          </span>
                        </Link>
                      ))}
                  </Footer.LinkGroup>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 mt-10 md:mt-0">
              <h1 className="font-bold underline">Subscriber</h1>
              <input
                type="text"
                className="bg-transparent border border-white rounded-md py-[4px] px-3"
                placeholder="Enter your email"
              />
              <button className="bg-white w-full text-black bold rounded-md py-[4px]">
                Subscriber
              </button>
            </div>
          </div>
          <hr className="my-4 text-white" />
          <div className="w-full sm:flex sm:items-center sm:justify-between text-white text-sm container mx-auto py-2 mb-2">
            <Footer.Copyright
              className="text-white"
              href="#"
              by="SportHub. All rights reserved"
              year={2024}
            />
            <div className="flex gap-5">
              <p>Privacy policy</p>
              <p>Terms & condition</p>
            </div>
          </div>
        </div>
      </Footer>
    </section>
  );
}
