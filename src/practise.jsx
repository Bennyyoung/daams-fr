function App() {
 const loggedIn = useContext(AuthContext)
 return (
   <div className="container">
     <AuthContextProvider>
       {/* <Router /> */}
       <BrowserRouter>
         <Navbar />
         <Routes>
           <Route path="/" element={<Home />} />
           {
             !loggedIn && (
               <>
                 <Route exact path="/login" element={<Login />} />
                 <Route exact path="/register" element={<Register />} />
                 {
                 console.log(loggedIn)
               }

               </>

             )
           }

           {
             !loggedIn && (
               <>
                 <Route exact path="/all-books" element={<AllBooks />} />
                 <Route exact path="/add-book" element={<AddBook />} />
                 <Route exact path="/edit-book/:id" element={<EditBook />} />
               </>
             )
           }
           {/* </Route> */}
         </Routes>
       </BrowserRouter>
     </AuthContextProvider>
   </div>
 );
}