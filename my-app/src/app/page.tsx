import Header from "@/components/Header";
import NewTaskInput from "@/components/NewTaskInput";
import TaskList from "@/components/TaskList";
import TaskSummery from "@/components/TaskSummery";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
         <Header/>
         <TaskSummery/>
         <NewTaskInput/>
         <TaskList/>
      </div> 
    </main>
  );
}
