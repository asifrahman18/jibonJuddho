import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function EditProfile() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <p>Edit Profile</p>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Edit</h4>
            <p className="text-sm text-muted-foreground">
              Edit Profile
            </p>
          </div>
          <div className="grid gap-2">
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
