import Image from "next/image";
import { z } from "zod";

const EditProfileZ = z.object({
  id: z.string(),
  name: z.string().optional(),
  bio: z.string().optional(),
  phone: z.string().optional(),
  year: z.string().optional(),
  position: z.string().optional(),
  image: z.string().optional(),
});

const GetProfileIdZ = z.object({
  id: z.string(),
});

const getUserEventsZ = z.object({
  id: z.string(),
});
export { EditProfileZ, GetProfileIdZ ,getUserEventsZ};
