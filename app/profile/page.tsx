import { ProfileEditor } from "@/components/profile-editor";
import { PrototypePage } from "@/components/prototype-layout";

export default function ProfilePage() {
  return (
    <PrototypePage title="Profile & Settings" subtitle="Edit the profile fields that will eventually power the member directory and public Bridge Certified Agent page.">
      <ProfileEditor />
    </PrototypePage>
  );
}
