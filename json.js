import http from "http";

const students = [];

const server = http.createServer((req, res) => {
    const { method, url } = req;

    // CREATE
    if (method === "POST" && url === "/Students") {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {
            const newStudent = JSON.parse(body);
            students.push(newStudent);

            res.writeHead(201, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                message: "Student created successfully",
                data: newStudent
            }));
        });
    }

    // READ
    else if (method === "GET" && url === "/Students") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(students));
    }

    // UPDATE
    else if (method === "PUT" && url.startsWith("/Students/")) {
        const id = Number(url.split("/")[2]);
        let body = "";

        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {
            const updatedData = JSON.parse(body);
            const index = students.findIndex(student => student.id === id);

            if (index === -1) {
                res.writeHead(404, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: "Student not found" }));
                return;
            }

            students[index] = { ...students[index], ...updatedData };

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                message: "Student updated successfully",
                data: students[index]
            }));
        });
    }

    // DELETE
    else if (method === "DELETE" && url.startsWith("/Students/")) {
        const id = Number(url.split("/")[2]);
        const index = students.findIndex(student => student.id === id);

        if (index === -1) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Student not found" }));
            return;
        }

        const deletedStudent = students.splice(index, 1);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            message: "Student deleted successfully",
            data: deletedStudent[0]
        }));
    }

    // INVALID ROUTE
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});