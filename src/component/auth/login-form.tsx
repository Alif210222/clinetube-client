"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import { toast } from "sonner";
import { loginUser } from "@/src/services/auth/auth";



const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Minimum 6 characters"),
});

type FormData = z.infer<typeof schema>;

export default function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await loginUser(data);

      if (res.success) {
        toast.success("Login successful");

        router.push("/");
        router.refresh();
      } else {
        toast.error(res.message || "Login failed");
      }
    } catch (error: any) {
      toast.error("Wrong credentials");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-14">

      <div className="w-full max-w-md rounded-3xl border border-slate-300 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-md shadow-2xl p-8">

        <h1 className="text-4xl font-bold text-center text-slate-900 dark:text-white">
          Welcome Back
        </h1>

        <p className="text-center mt-2 text-slate-600 dark:text-slate-400">
          Login to CineVerse
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-5"
        >

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
            className="w-full cursor-pointer h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold disabled:opacity-70"
          >
            {isSubmitting ? "Logging..." : "Login"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
          New user?{" "}
          <Link
            href="/register"
            className="text-cyan-500 font-semibold"
          >
            Register now
          </Link>
        </p>

        <Link href="/">
          <button className="w-full mt-5 h-12 rounded-xl border border-slate-300 dark:border-white/10 cursor-pointer">
            Go Home
          </button>
        </Link>
      </div>
    </main>
  );
}