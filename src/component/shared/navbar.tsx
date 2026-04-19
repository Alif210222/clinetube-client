"use client";

import Link from "next/link";
import { Menu, Moon, Sun, Film } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { getCurrentUser, logoutUser } from "@/src/services/auth/auth";



/* ================== USER TYPE ================== */

type UserRole = "USER" | "ADMIN";

interface User {
  name: string;
  email: string;
  role: UserRole;
}

/* ================== NAVBAR ================== */

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);

  console.log(user);

  const router = useRouter();

  const { theme, setTheme } = useTheme();

  /* get current user */
  useEffect(() => {
    const fetchUser = async () => {
      const data = await getCurrentUser();

      if (data) {
        setUser(data);
      }
    };

    fetchUser();
  }, []);

  /* logout */
  const handleLogout = async () => {
    await logoutUser();

    setUser(null);

    router.push("/login");
    router.refresh();
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold"
        >
          <Film className="w-6 h-6 text-pink-500" />

          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text">
            CineVerse
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">

          <NavLink href="/">Home</NavLink>
          <NavLink href="/movies">Movies</NavLink>
          <NavLink href="/pricing">Pricing</NavLink>
          <NavLink href="/watchlist">Watchlist</NavLink>
          <NavLink href="/aboutPage">About</NavLink>

          {/* Theme Toggle */}
          <Button
            size="icon"
            variant="ghost"
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-violet-400" />
            )}
          </Button>

          {/* Auth */}
          {!user ? (
            <>
              <Link href="/login">
                <Button
                  variant="ghost"
                  className="text-white hover:text-pink-400"
                >
                  Login
                </Button>
              </Link>

              <Link href="/register">
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90">
                  Register
                </Button>
              </Link>
            </>
          ) : (
            <UserDropdown
              user={user}
              onLogout={handleLogout}
            />
          )}
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">

          {/* Theme */}
          <Button
            size="icon"
            variant="ghost"
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </Button>

          {/* Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <Menu />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-slate-950 border-white/10"
            >
              <div className="flex flex-col gap-5 mt-8">

                <Link href="/">Home</Link>
                <Link href="/movies">Movies</Link>
                <Link href="/watchlist">Watchlist</Link>
                <Link href="/pricing">Pricing</Link>
                <Link href="/aboutPage">About</Link>

                {!user ? (
                  <>
                    <Link href="/login">
                      <Button
                        variant="outline"
                        className="w-full"
                      >
                        Login
                      </Button>
                    </Link>

                    <Link href="/register">
                      <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600">
                        Register
                      </Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href="/profile">
                      Profile
                    </Link>

                    {user.role === "USER" && (
                      <Link href="/orders">My Orders</Link>
                    )}

                    {user.role === "ADMIN" && (
                      <Link href="/admin/dashboard">
                        Dashboard
                      </Link>
                    )}

                    <Button
                      onClick={handleLogout}
                      variant="destructive"
                    >
                      Logout
                    </Button>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

/* ================= NAV LINK ================= */

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-slate-200 hover:text-pink-400 transition"
    >
      {children}
    </Link>
  );
}

/* ================= USER DROPDOWN ================= */

function UserDropdown({
  user,
  onLogout,
}: {
  user: User;
  onLogout: () => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-pink-500 text-white">
              {user.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-48"
      >
        <DropdownMenuItem asChild>
          <Link href="/profile">
            Profile
          </Link>              
        </DropdownMenuItem>

          {user.role === "USER" && (
          <>
            <DropdownMenuItem asChild>
              <Link className="cursor-pointer" href="/movies">My Orders</Link>
            </DropdownMenuItem>
            
            <DropdownMenuItem asChild>
              <Link href="/orders">My Orders</Link>
            </DropdownMenuItem>
          </>
        )}

        {user.role === "ADMIN" && (
          <DropdownMenuItem asChild>
            <Link href="/admin/dashboard">
              Dashboard
            </Link>
          </DropdownMenuItem>
        )}

        <DropdownMenuItem asChild>
          <button
            onClick={onLogout}
            className="w-full text-left text-red-500"
          >
            Logout
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}