import { Card } from "../ui/Card";
import { File, Share2, Trash2 } from "lucide-react";
import { AppBar2 } from "./AppBar2";
export const Note = () => {
  return (
    <>
        <AppBar2/>  
      <section className="p-12">


        <div>
          <h1 className="text-3xl font-bold">All Notes</h1>
        </div>

        <div id="displayCards" className="flex gap-8 mt-14 flex-shrink ">
          <Card
            variants="primary"
            text="New project"
            listText={[
              "Create a new saas project",
              "Build personal knowladge base",
              "Create a habit tracker",
              "Design a minimalistid todo",
            ]}
            headerText="Web project"
            size="lg"
            startIcons={<File />}
            endIcons={[<Share2 />, <Trash2 />]}
          />

          <Card
            variants="primary"
            text="New project"
            listText={[
              "Create a new saas project",
              "Build personal knowladge base",
              "Create a habit tracker",
              "Design a minimalistid todo",
            ]}
            headerText="Web project"
            size="lg"
            startIcons={<File />}
            endIcons={[<Share2 />, <Trash2 />]}
          />

          <Card
            variants="primary"
            text="New project"
            listText={[
              "Create a new saas project",
              "Build personal knowladge base",
              "Create a habit tracker",
              "Design a minimalistid todo",
            ]}
            headerText="Web project"
            size="lg"
            startIcons={<File />}
            endIcons={[<Share2 />, <Trash2 />]}
          />

          <Card
            variants="primary"
            text="New project"
            listText={[
              "Create a new saas project",
              "Build personal knowladge base",
              "Create a habit tracker",
              "Design a minimalistid todo",
            ]}
            headerText="Web project"
            size="lg"
            startIcons={<File />}
            endIcons={[<Share2 />, <Trash2 />]}
          />

          <Card
            variants="primary"
            text="New project"
            listText={[
              "Create a new saas project",
              "Build personal knowladge base",
              "Create a habit tracker",
              "Design a minimalistid todo",
            ]}
            headerText="Web project"
            size="lg"
            startIcons={<File />}
            endIcons={[<Share2 />, <Trash2 />]}
          />
        </div>
      </section>
    </>
  );
};
