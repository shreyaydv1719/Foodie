 "use client";
import { useFormStatus } from "react-dom";

export default function Mealsformsubmit() {
  const { pending } = useFormStatus();

  return (
    <>
      <button disabled={pending} >
        {pending ? 'Submitting...' : 'Share meal'}
      </button>
    </>
  );
}
