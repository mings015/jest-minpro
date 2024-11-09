import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import BreadCrumb from "./components/BreadCrumb";
import GridPattern from "./components/GridPattern";
import Paginations from "./components/Paginations";
import { Link } from "react-router-dom";
import SkeletonUser from "./components/SkeletonUser";
import UseUserList from "@/hooks/useUserList";
import AddUserForm from "./components/AddUserForm";

const UserListPage = () => {
  const {
    isLoading,
    error,
    pagination,
    setPage,
    handleNext,
    handlePrev,
    searchTerm,
    handleSearchChange,
    filteredData,
  } = UseUserList();

  return (
    <div>
      <Header />
      <div className="relative">
        <GridPattern />
        <div className="container flex flex-col gap-5 mx-auto">
          <div className="flex flex-col gap-5 px-5 mt-10 sm:px-0">
            <BreadCrumb />
            <div className="flex items-center justify-end gap-5 ">
              <Search />
              <Input
                className="w-[200px] relative"
                id="search"
                type="search"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div className="flex items-center justify-end gap-5 ">
            <AddUserForm />
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-wrap justify-center grid-cols-3 gap-20">
              {isLoading && (
                <div>
                  <SkeletonUser />
                </div>
              )}
              {error && <div>{error}</div>}
              {filteredData.map((user) => (
                <Card key={user.id} className="relative bg-bg w-[350px]">
                  <CardHeader>
                    <CardTitle>
                      <div className="container mb-5 bg-black border-2 aspect-square border-border rounded-base shadow-light">
                        <img
                          className="w-full aspect-square"
                          src={user.avatar}
                          alt="foto"
                        />
                      </div>
                    </CardTitle>
                    <CardTitle>
                      {user.first_name} {user.last_name}
                    </CardTitle>
                    <CardDescription>
                      First Name : {user.first_name}
                    </CardDescription>
                    <CardDescription>
                      Last Name : {user.last_name}
                    </CardDescription>
                    <CardDescription>{user.email}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Link to={`/user-detail/${user.id}`}>
                      <Button>Details</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <Paginations
              pagination={pagination}
              setPage={setPage}
              handleNext={handleNext}
              handlePrev={handlePrev}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserListPage;
