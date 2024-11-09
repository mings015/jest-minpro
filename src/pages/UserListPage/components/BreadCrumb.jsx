import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadCrumb = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>User List</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumb;

// // todo besok :
// - Breadcrumb -> besok (done)
// - lempar data dari list ke detail ->besok (done)
// - edit dan delete ->besok (done)
// - ambil data dari detail ke form edit ->besok (done)
// - percantik halaman detail -> setelah tes
// - dokumentasi di read.md github ->setelah tes
