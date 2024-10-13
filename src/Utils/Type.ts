import { string, z } from "zod";

const RegisterformSchema = z.object({
  username: z.string().min(2, {
    message: "نام کاربری حداقل باید 2 حرف باشد.",
  }),
  email: z.string().email({
    message: "ایمیل نامعتبر است",
  }),
  password: z
    .string()
    .min(8, {
      message: "رمز عبور باید حداقل 8رقم باشد.",
    })
    .regex(/[A-Z]/, {
      message: "باشد رمز عبورباید دارای یک حرف بزرگ انگلیسی {A-Z} ",
    })
    .regex(/[a-z]/, {
      message: "باشد رمز عبورباید دارای یک حرف بزرگ انگلیسی {a-z}",
    })
    .regex(/[0-9]/, {
      message: " داشته باشد رمز عبورباید یک رقم از {0-9}",
    })
    .regex(/[@$!%*?&#]/, {
      message: "رمز عبور باید شامل (e.g., @$!%*?&#)باشد",
    }),
});

export default RegisterformSchema;

export const LoginformSchema = z.object({
  email: z.string().email({
    message: "ایمیل نامعتبر است",
  }),
  password: z
    .string()
    .min(8, {
      message: "رمز عبور باید حداقل 8رقم باشد.",
    })
    .regex(/[A-Z]/, {
      message: "باشد رمز عبورباید دارای یک حرف بزرگ انگلیسی {A-Z} ",
    })
    .regex(/[a-z]/, {
      message: "باشد رمز عبورباید دارای یک حرف بزرگ انگلیسی {a-z}",
    })
    .regex(/[0-9]/, {
      message: " داشته باشد رمز عبورباید یک رقم از {0-9}",
    })
    .regex(/[@$!%*?&#]/, {
      message: "رمز عبور باید شامل (e.g., @$!%*?&#)باشد",
    }),
});

export const profileFormSchema = z.object({
  name: z.string().min(2, { message: "اسم شما حداقل باید 2 حرف باشد" }),
  lastName: z.string().min(4, { message: "اسم شما حداقل باید 4 حرف باشد" }),
  email: z.string().email({
    message: "ایمیل نامعتبر است",
  }),
  location: z.string(),
});

export const addJobSchema = z.object({
  position: z.string().min(1, { message: "لطفا موقعیت شغلی خودرا وارد کنید" }),
  company: z.string().min(1, { message: "لطفا نام شرکت را وارد کنید" }),
  jobLocation: z.string().min(1, { message: "محل مکانی شرکت را وارد کنید" }),
  jobType: z.string(),
  status: z.string(),
});

export type Job = {
  position: string;
  company: string;
  jobLocation: string;
  jobType: string;
  status: string;
  createdAt: string;
  _id: string;
};

// edit item
// editJobId: _id,
// position,
// company,
// jobLocation,
// jobType,
// status,
