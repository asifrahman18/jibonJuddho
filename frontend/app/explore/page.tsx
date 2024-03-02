"use client";

import moment from "moment";
import { useEffect, useState } from "react";
import { getJobs } from "../api/jobs/route";

import Job from '../models/job'

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
    <div className="grid grid-cols-1 md:grid-cols-2 max-h-screen mt-11">
      <div className="overflow-y-auto p-4">
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
      <div className="sticky top-0 pt-11">
        <JobDetail jobId={selectedJobId} />
      </div>
    </div>
  );
};

export default Explore;
