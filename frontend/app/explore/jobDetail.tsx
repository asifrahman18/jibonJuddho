import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState, useContext } from "react";
import { getJobDetail } from "../api/jobs/route";
import { AuthContext } from "@/context/AuthContext";

import Job from '../models/job'

import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

import {
  Card,
  CardContent
} from "@/components/ui/card";

interface JobDetailProps {
  jobId: number | null;
}

const JobDetail: React.FC<JobDetailProps> = ({ jobId }) => {
  const [jobDetail, setJobDetail] = useState<Job | null>(null);
  const { isAuthenticated, user } = useContext(AuthContext);
  const [companyDetail, setCompanyDetail] = useState<Job | null>(null);

  useEffect(() => {
    if (jobId !== null) {
      fetchJobDetail(jobId);
    }
  }, [jobId]);

  const fetchJobDetail = async (id: number) => {
    try {
      const jobData: Job = await getJobDetail(id);
      setJobDetail(jobData);
      // console.log(jobData);
    } catch (error) {
      console.error("Error fetching job detail:", error);
    }
  };

  return (
    <div className="">
      {jobDetail ? (
        <Card className="px-3 pt-3 dark:border-primary border-[#000000]">
          <div className="text-3xl md:text-6xl text-center">
            <h1>{jobDetail.title}</h1>
          </div>
          <Card className="text-xl md:text-3xl my-2 dark:bg-purple-950/15">
            <CardContent className="p-4">{jobDetail.description}</CardContent>
          </Card>
          <p className="py-5 text-2xl">Job Summary</p>
          {isAuthenticated && <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Posted At</TableHead>
                <TableCell>
                  {moment
                    .utc(jobDetail.createdAt)
                    .local()
                    .startOf("seconds")
                    .fromNow()}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Expires At</TableHead>
                {/* <TableCell>{jobDetail.expiresAt.substring(0, 10)}</TableCell> */}
                <TableCell>
              {moment(jobDetail.expiresAt).isBefore(moment()) ? (
                'Expired'
              ) : (
                <>
                  {jobDetail.expiresAt.substring(0, 10)}
                  {' - '}
                  {moment(jobDetail.expiresAt).endOf('day').fromNow()}
                </>
              )}
            </TableCell>
              </TableRow>
              <TableRow>
              <TableHead>Location</TableHead>
              <TableCell>{jobDetail.location}</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableCell>
                <Link href={`mailto:${jobDetail.email}?subject=${'Job Application'}&body=${'I want Job'}`}>{jobDetail.email}</Link>
                </TableCell>
                {/* <TableCell>{jobDetail.email}</TableCell> */}
              </TableRow>
              <TableRow>
              <TableHead>Phone</TableHead>
              <TableCell>{jobDetail.phone}</TableCell>
              </TableRow>
              <TableRow>
              <TableHead>Salary</TableHead>
              <TableCell>{jobDetail.salary}</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Openings</TableHead>
                <TableCell>{jobDetail.openings}</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Qualifications</TableHead>
                <TableCell>{jobDetail.qualification}</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Job Type</TableHead>
                <TableCell>{jobDetail.jobType}</TableCell>
              </TableRow>
              <TableRow></TableRow>
            </TableHeader>
          </Table>}
          {!isAuthenticated && <p className="py-5 text-2xl text-center"><Link href='/signIn'>Sign in</Link> to see details</p>}
          
        </Card>
      ) : (
        <p>Select a job to view details</p>
      )}
    </div>
  );
};

export default JobDetail;
