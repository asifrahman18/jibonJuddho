import React, { useEffect, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getCompanyJobs } from "../../api/company/route";

interface CompDetailProps {
  compId: number | null;
}

interface Job {
  id: number;
  title: string;
  description: string;
  email: string;
  location: string;
  jobType: string;
  salary: number;
  openings: number;
  qualification: string;
  company: string;
  expiresAt: string;
  createdAt: string;
}

const ViewJobs: React.FC<CompDetailProps> = ({ compId }) => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    if (compId !== null) {
      fetchJoblist(compId);
    }
  }, [compId]);

  const fetchJoblist = async (id: number) => {
    console.log("Inside fetch function- view job:", id);
    try {
      console.log("Inside try/catch- view job:", id);
      const jobData: Job[] = await getCompanyJobs(id);
      setJobs(jobData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>{""}</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {jobs.map((job) => (
              <AccordionItem
                value={job.id.toString()}
                key={job.id}
                className="cursor-pointer"
              >
                <AccordionTrigger className="p-2">{job.title}</AccordionTrigger>
                <AccordionContent className="p-2">
                  Location: {job.location}
                </AccordionContent>
                <AccordionContent className="p-2">
                  Email: {job.email}
                </AccordionContent>
                <AccordionContent className="p-2">
                  <div className="flex gap-6">
                    <Button variant='default'>Edit Job</Button>
                    <Button variant='destructive'>Delete Job</Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default ViewJobs;
