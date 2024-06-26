import { AArrowUp, Menu } from "lucide-react";
import Link from "next/link"
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"

 export default function Navbar() {
  return (
    <div className="flex items-center justify-around h-16 px-4 bg-white dark:bg-gray-800 shadow-sm">
      <div>
        <Link className="flex items-center" href="/">
          <AArrowUp className="w-10 h-10 text-black dark:text-white" />
          {/* <span className="ml-2 text-2xl font-semibold text-black dark:text-white">Aadil&apos;s Portfolio</span> */}
        </Link>
      </div>
      <div>
        <nav className="lg:flex hidden space-x-4">
          <Link
            className="text-lg font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-lg font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-lg font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
            href="#"
          >
            Projects
          </Link>
        </nav>
      </div>
      <div>
        <div className="lg:flex hidden items-center space-x-4">

          <Dialog>
              <DialogTrigger asChild>
              <Button className="text-sm" variant="outline">Contact</Button>
              </DialogTrigger>
              <DialogContent className="w-full max-w-md">
                <DialogHeader>
                  <DialogTitle>Contact Info</DialogTitle>
                </DialogHeader>
                  <DialogDescription>
                    <div className="font-semibold text-black">Aadil Alli</div>
                    <div className="font-semibold text-black">646-338-4179</div>
                    <div className="font-semibold text-black">
                      <a href="mailto:aadil15alli@gmail.com">aadil15alli@gmail.com</a>
                    </div>
                  </DialogDescription>
              </DialogContent>
            </Dialog>
          {/* <Button className="text-sm" variant="outline">
            Register
          </Button> */}
        </div>
        <div className="lg:hidden flex items-center">
          <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-semibold"
                  >
                    <AArrowUp className="h-6 w-6" />
                    <span className="sr-only">Aadil&apos;s Portfolio</span>
                  </Link>
                  <Link href="/" className="hover:text-foreground">
                    Home
                  </Link>
                  <Link
                    href="/categories"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About
                  </Link>
                  <Link
                    href="/quickpick"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Projects
                  </Link>
                  <Link
                    href="/help"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Help
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </div>
  )
 }
 