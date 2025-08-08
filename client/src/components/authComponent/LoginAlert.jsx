import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function LoginAlert() {
  return (
    <div className="grid w-full max-w-xl items-start gap-4">
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Only the university students are allowd</AlertTitle>
        <AlertDescription>
          <p>Please verify your email is university gsuite account</p>
          <p>example@ugrad.iiuc.ac.bd</p>
        </AlertDescription>
      </Alert>
    </div>
  )
}
