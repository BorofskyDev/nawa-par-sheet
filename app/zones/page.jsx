import MainHeading from "@/components/headings/main-heading/MainHeading";
import TasksList from "@/components/zones/task-list/TaskList";
import ZoneLinkList from "@/components/zones/zone-link-list/ZoneLinkList";

export default function ZonesApp({zone}) {
    return (
    <div>
        <MainHeading>Get In The Zone!</MainHeading>
        <ZoneLinkList />
    </div>  
    )
}