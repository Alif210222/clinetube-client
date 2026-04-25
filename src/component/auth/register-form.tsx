"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import { toast } from "sonner";
import { registerUser } from "@/src/services/auth/auth";



const schema = z.object({
  name: z.string().min(2, "Enter full name"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Minimum 6 characters"),
});

type FormData = z.infer<typeof schema>;

export default function RegisterForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await registerUser(data);

      if (res.success) {
        toast.success("Account created successfully");
        reset();
        router.push("/login");
      } else {
        toast.error(res.message || "Registration failed");
      }
    } catch (error: any) {
      toast.error("Something went wrong");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-14">

      <div className="w-full max-w-md rounded-3xl border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-md shadow-2xl p-8">

        <h1 className="text-4xl font-bold text-center text-slate-900 dark:text-white">
          Create Account
        </h1>

        <p className="text-center mt-2 text-slate-600 dark:text-slate-400">
          Join CineVerse today
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-5"
        >

          {/* Name */}
          <div>
            <input
              {...register("name")}
              placeholder="Full Name"
              className="w-full h-12 rounded-xl px-4 border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              {...register("email")}
              placeholder="Email Address"
              className="w-full h-12 rounded-xl px-4 border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
              className="w-full h-12 rounded-xl px-4 border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 outline-none"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            disabled={isSubmitting}
            className="w-full cursor-pointer h-12 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold disabled:opacity-70"
          >
            {isSubmitting ? "Creating..." : "Register"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
          Already registered?{" "}
          <Link
            href="/login"
            className="text-pink-500 font-semibold"
          >
            Login now
          </Link>
        </p>

        <Link href="/">
          <button className="w-full cursor-pointer mt-5 h-12 rounded-xl border border-slate-300 dark:border-white/10">
            Go Home
          </button>
        </Link>
      </div>
    </main>
  );
}
