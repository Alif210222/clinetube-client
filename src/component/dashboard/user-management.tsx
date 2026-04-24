"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  Crown,
  Shield,
  User,
  BadgeCheck,
} from "lucide-react";

import { getAllUsers } from "@/src/services/adminUserManagement/user";
import PageLoader from "../shared/page-loader";



export default function UserManagement() {
  const [users, setUsers] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  const loadUsers = async () => {
    const res =
      await getAllUsers();

    const userData =
      Array.isArray(res?.data)
        ? res.data
        : Array.isArray(
            res?.data?.data
          )
        ? res.data.data
        : [];

    setUsers(userData);
    setLoading(false);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  if (loading)
    return (
      <div className="p-10 text-xl">
       <PageLoader></PageLoader>
      </div>
    );

  return (
    <main className="p-6 md:p-10">

      {/* Heading */}
      <div className="mb-8">

        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          User Management
        </h1>

        <p className="text-slate-500 mt-2">
          View all registered users
        </p>

      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-5 mb-8">

        <div className="rounded-3xl p-6 bg-white dark:bg-slate-950 border">
          <p className="text-sm text-slate-500">
            Total Users
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {users.length}
          </h2>
        </div>

        <div className="rounded-3xl p-6 bg-white dark:bg-slate-950 border">
          <p className="text-sm text-slate-500">
            Admins
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {
              users.filter(
                (u) =>
                  u.role ===
                  "ADMIN"
              ).length
            }
          </h2>
        </div>

        <div className="rounded-3xl p-6 bg-white dark:bg-slate-950 border">
          <p className="text-sm text-slate-500">
            Premium Users
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {
              users.filter(
                (u) =>
                  u.membershipStatus ===
                  "PREMIUM"
              ).length
            }
          </h2>
        </div>

      </div>

      {/* Table Desktop */}
      <div className="hidden lg:block rounded-3xl overflow-hidden border bg-white dark:bg-slate-950">

        <table className="w-full">

          <thead className="bg-slate-100 dark:bg-slate-900">

            <tr className="text-left">

              <th className="p-4">
                Name
              </th>

              <th className="p-4">
                Email
              </th>

              <th className="p-4">
                Role
              </th>

              <th className="p-4">
                Membership
              </th>

            </tr>

          </thead>

          <tbody>

            {users.map((user) => (
              <tr
                key={user.id}
                className="border-t"
              >
                <td className="p-4 font-medium">
                  {user.name}
                </td>

                <td className="p-4 text-slate-500">
                  {user.email}
                </td>

                <td className="p-4">
                  <RoleBadge
                    role={
                      user.role
                    }
                  />
                </td>

                <td className="p-4">
                  <MembershipBadge
                    status={
                      user.membershipStatus
                    }
                  />
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

      {/* Mobile Card */}
      <div className="grid lg:hidden gap-5">

        {users.map((user) => (
          <div
            key={user.id}
            className="rounded-3xl border bg-white dark:bg-slate-950 p-5"
          >
            <h2 className="font-bold text-lg">
              {user.name}
            </h2>

            <p className="text-sm text-slate-500 mt-1 break-all">
              {user.email}
            </p>

            <div className="flex gap-3 mt-4 flex-wrap">

              <RoleBadge
                role={
                  user.role
                }
              />

              <MembershipBadge
                status={
                  user.membershipStatus
                }
              />

            </div>
          </div>
        ))}

      </div>
    </main>
  );
}

/* Role Badge */
function RoleBadge({
  role,
}: {
  role: string;
}) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-sm flex items-center gap-1
      ${
        role === "ADMIN"
          ? "bg-pink-500/10 text-pink-500"
          : "bg-cyan-500/10 text-cyan-500"
      }`}
    >
      {role === "ADMIN" ? (
        <Shield className="w-4 h-4" />
      ) : (
        <User className="w-4 h-4" />
      )}

      {role}
    </span>
  );
}

/* Membership Badge */
function MembershipBadge({
  status,
}: {
  status: string;
}) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-sm flex items-center gap-1
      ${
        status === "PREMIUM"
          ? "bg-yellow-500/10 text-yellow-500"
          : "bg-emerald-500/10 text-emerald-500"
      }`}
    >
      {status === "PREMIUM" ? (
        <Crown className="w-4 h-4" />
      ) : (
        <BadgeCheck className="w-4 h-4" />
      )}

      {status}
    </span>
  );
}