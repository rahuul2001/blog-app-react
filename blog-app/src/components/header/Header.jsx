// import React from "react";
// import { Container } from "../container/Container";
// import Logo from "../Logo";
// import { Link } from "react-router-dom";
// import LogoutBtn from "./LogoutBtn";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// function Header() {
//   const authStatus = useSelector((state) => state.auth.status);
//   const navigate = useNavigate();

//   const navItems = [
//     {
//       name: "Home",
//       slug: "/",
//       active: true,
//     },
//     {
//       name: "Login",
//       slug: "/login",
//       active: !authStatus,
//     },
//     {
//       name: "Signup",
//       slug: "/signup",
//       active: !authStatus,
//     },
//     {
//       name: "All Posts",
//       slug: "/all-posts",
//       active: authStatus,
//     },
//     {
//       name: "Add Post",
//       slug: "/add-post",
//       active: authStatus,
//     },
//   ];
//   return (
//     <header className="py-3 shadow bg-gray-500">
//       <Container>
//         <nav className="flex">
//           <div className="mr-4">
//             <Link to="/">
//               <Logo />
//             </Link>
//           </div>

//           <ul className="flex ml-auto">
//             {navItems.map((item) => {
//               if (item.active) {
//                 return (
//                   <li key={item.name} className="mr-4">
//                     <button
//                       onClick={() => navigate(item.slug)}
//                       className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
//                     >
//                       {item.name}
//                     </button>
//                   </li>
//                 );
//               }
//             })}
//             {authStatus && <li><LogoutBtn /></li>}
//           </ul>
//         </nav>
//       </Container>
//     </header>
//   );
// }

// export default Header;

import React from "react";
import { Container } from "../container/Container";
import Logo from "../Logo";
import { Link, useNavigate } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => {
    console.log("State is: ", state);
    state.auth.status;
  });
  const userName = useSelector((state) => state.auth.user?.name || "Guest");
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md">
      <Container>
        <nav className="flex items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <Logo className="h-10" />
            </Link>
          </div>

          {/* Navigation */}
          <ul className="flex ml-auto items-center space-x-6">
            {navItems.map((item) => {
              if (item.active) {
                return (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition duration-200"
                    >
                      {item.name}
                    </button>
                  </li>
                );
              }
            })}

            {/* Display Logout Button if Authenticated */}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>

          {/* User Welcome Message */}
          {authStatus && (
            <div className="ml-4 text-sm font-medium bg-white/10 px-3 py-1 rounded-lg">
              Welcome, {userName}
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
}

export default Header;
