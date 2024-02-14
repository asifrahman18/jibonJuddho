"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface QualificationProps {
  onSelectQualification: (type: string) => void;
}

const types = [
  {
    value: 'any',
    label: "Any",
  },
  {
    value: 'ssc',
    label: "SSC or Equivalent",
  },
  {
    value: 'hsc',
    label: "HSC or Equivanlent",
  },
  {
    value: 'undergraduate',
    label: "Undergraduate",
  },
  {
    value: 'postgraduate',
    label: "Postgraduate",
  },
]

export function Qualification({ onSelectQualification }: QualificationProps) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? types.find((type) => type.value === value)?.label
            : "Select type..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandEmpty>No type found.</CommandEmpty>
          <CommandGroup>
            {types.map((type) => (
              <CommandItem
                key={type.value}
                value={type.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  onSelectQualification(currentValue);
                  setOpen(false);
                }}
              >
                {type.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === type.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
