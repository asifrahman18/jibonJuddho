"use client";

import moment from "moment";
import { useEffect, useState } from "react";
import { getJobs } from "../api/jobs/route";

import JobDetail from "./jobDetail";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
}

const Explore = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);

  const handleJobClick = (jobId: number) => {
    setSelectedJobId(jobId);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const jobData: Job[] = await getJobs();
      setJobs(jobData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="flex h-screen pt-11">
      <div className="flex-1 p-4">
        <>
          {jobs.length === 0 ? (
            <p>No Job is currently registered.</p>
          ) : (
            <Table className="border-collapse border w-full">
              <TableCaption>List of Jobs</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="border p-2">Name</TableHead>
                  <TableHead className="border p-2">Type</TableHead>
                  <TableHead className="border p-2">Location</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {jobs.map((job) => (
                  <TableRow
                    key={job.id}
                    className="cursor-pointer"
                    onClick={() => handleJobClick(job.id)}
                  >
                    {moment(job.expiresAt).isAfter(moment()) ? (
                      <>
                        <TableCell className="border p-2">
                          {job.title}
                        </TableCell>
                        <TableCell className="border p-2">
                          {job.jobType}
                        </TableCell>
                        <TableCell className="border p-2">
                          {job.location}
                        </TableCell>
                      </>
                    ) : null}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </>
      </div>
      <div className="flex-1 p-4">
        <JobDetail jobId={selectedJobId} />
      </div>
    </div>
  );
};

export default Explore;
