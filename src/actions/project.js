"use server";

import prisma from "@/lib/prisma";
import { onAuthenticateUser } from "./user";

export const getAllProject = async () => {
    try {
        const checkUser = await onAuthenticateUser();
        if (checkUser.status !== 200 || !checkUser.user) {
            return {
                status: 403,
                error: "User is not Authenticated",
            };
        }
        const projects = await prisma.project.findMany({
            where: {
                userId: checkUser.user.id,
                isDeleted: false,
            },
            orderBy: {
                updatedAt: "desc",
            },
        });
        if (projects.length === 0) {
            return {
                status: 404,
                error: "No Projects Found",
            };
        }
        return {
            status: 200,
            data: projects,
        };
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            error: " Server Error",
        };
    }
};

export const getRecentProjects = async () => {
    try {
        const checkUser = await onAuthenticateUser();
        if (!checkUser) {
            return {
                status: 403,
                error: "USer not authenticated",
            };
        }
        const recentprojects = await prisma.project.findMany({
            where: {
                userId: checkUser.user.id,
                isDeleted: false,
            },
            orderBy: {
                updatedAt: "desc",
            },
            take: 5,
        });
        if (recentprojects.length === 0) {
            return {
                status: 404,
                error: "No Projects Found",
            };
        }
        return {
            status: 200,
            data: recentprojects,
        };
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            error: " Server Error",
        };
    }
};
