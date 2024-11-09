import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GridPattern from "../UserListPage/components/GridPattern";

import CardComment from "./components/CardComment";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import BreadCrumb from "./components/BreadCrumb";
import { useParams } from "react-router-dom";
import UseDetailUser from "@/hooks/useDetailUser";
import SkeletonUser from "../UserListPage/components/SkeletonUser";
import UseDeleteUser from "@/hooks/useDeleteUser";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

const DetailUserPage = () => {
  const { id } = useParams();
  const { detail, isLoading, error } = UseDetailUser(id);
  const { handleDelete, successDelete, handleAddUser } = UseDeleteUser();

  return (
    <>
      <Header />
      <div className="relative">
        <GridPattern />
        <div className="container flex flex-col gap-5 mx-auto">
          <div className="flex flex-col gap-5 px-5 mt-10 sm:px-0">
            <BreadCrumb />
            {isLoading && (
              <div>
                <SkeletonUser />
              </div>
            )}
            {error && <div className="text-red-500">{error}</div>}
            {!detail && <div>No user data found</div>}
            <div>
              <div className="flex flex-col gap-10">
                <div className="flex flex-wrap w-full gap-5 sm:flex-nowrap">
                  <img
                    className="relative w-full border-2 rounded-base sm:w-1/2 aspect-square border-border shadow-light"
                    src={detail?.avatar}
                    alt="foto"
                  />
                  <div className="flex flex-col justify-between w-full gap-5 sm:w-1/2">
                    <div className="flex flex-col gap-5">
                      <h1 className="text-4xl lg:text-5xl font-heading">
                        {detail?.first_name} {detail?.last_name}
                      </h1>
                      <h2>ID : {id}</h2>
                      <h2 className="text-xl">
                        First Name : {detail?.first_name}
                      </h2>
                      <h2 className="text-xl">
                        Last Name : {detail?.last_name}
                      </h2>
                      <h2 className="text-xl">Email : {detail?.email}</h2>
                      <h2 className="relative p-2 bg-slate-100 rounded-base">
                        Description : Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Et laborum cupiditate ab nobis earum
                        sequi optio quis, reprehenderit nulla autem numquam
                        vero, quos a quo corporis accusantium est sunt quibusdam
                        perspiciatis error nemo. Repellendus natus impedit ipsum
                        dolorum harum numquam a fugiat eius id saepe. Neque qui
                        nemo iste quisquam modi tempora ut, minus ipsum quaerat.
                        Dicta magnam excepturi tenetur
                      </h2>
                    </div>
                    <div className="flex gap-5">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button>Edit Profile</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Edit profile</DialogTitle>
                            <DialogDescription>
                              Make changes to your profile here. Click save when
                              youre done.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="flex justify-center">
                              <img
                                className="relative w-full border-2 rounded-base sm:w-1/2 aspect-square border-border shadow-light"
                                src={detail?.avatar}
                                alt="foto"
                              />
                            </div>

                            <div className="grid items-center grid-cols-4 gap-4">
                              <Label htmlFor="picture" className="text-right">
                                Picture
                              </Label>
                              <Input
                                id="picture"
                                type="file"
                                className="col-span-3"
                              />
                            </div>
                            <div className="grid items-center grid-cols-4 gap-4">
                              <Label
                                htmlFor="first_name"
                                className="text-right"
                              >
                                First Name
                              </Label>
                              <Input
                                id="first_name"
                                defaultValue={detail?.first_name}
                                className="col-span-3"
                              />
                            </div>
                            <div className="grid items-center grid-cols-4 gap-4">
                              <Label htmlFor="last_name" className="text-right">
                                Last Name
                              </Label>
                              <Input
                                id="last_name"
                                defaultValue={detail?.last_name}
                                className="col-span-3"
                              />
                            </div>
                            <div className="grid items-center grid-cols-4 gap-4">
                              <Label htmlFor="email" className="text-right">
                                Email
                              </Label>
                              <Input
                                id="email"
                                defaultValue={detail?.email}
                                className="col-span-3"
                              />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button type="submit" onClick={handleAddUser}>
                              Save changes
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button className="bg-red-400">Delete</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Are you absolutely sure?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will
                              permanently delete your account and remove your
                              data from our servers.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDelete(detail?.id)}
                            >
                              Continue
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </div>
                <CardComment />
                {successDelete && (
                  <Alert>
                    <Terminal className="w-4 h-4" />
                    <AlertTitle>Delete Success</AlertTitle>
                    <AlertDescription>Delete Success</AlertDescription>
                  </Alert>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailUserPage;
