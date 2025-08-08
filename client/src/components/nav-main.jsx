import { ChevronRight } from "lucide-react";
import { NavLink, useLocation } from "react-router";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ComplainForm from "@/components/ComplainForm";
import { useState } from "react";

export function NavMain({ items, role }) {
  const location = useLocation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const isActive = (url) => location.pathname.startsWith(url);
  const groupLabel = role === "admin" ? "Admin Navigation" : "User Navigation";

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{groupLabel}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const hasSubItems = item.items?.length > 0;
          const isParentActive =
            isActive(item.url) ||
            item.items?.some((subItem) => isActive(subItem.url));

          // Quick Complain 
          if (item.title === "Quick Complain") {
            return (
              <Dialog
                key={item.title}
                open={isDialogOpen}
                onOpenChange={setIsDialogOpen}
              >
                <SidebarMenuItem>
                  <DialogTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <ComplainForm onSuccess={() => setIsDialogOpen(false)} />
                  </DialogContent>
                </SidebarMenuItem>
              </Dialog>
            );
          }

          return (
            <Collapsible key={item.title} asChild defaultOpen={isParentActive}>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip={item.title}
                  className={`${
                    isActive(item.url)
                      ? "bg-primary/10 text-primary font-medium"
                      : ""
                  }`}
                >
                  <NavLink to={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </NavLink>
                </SidebarMenuButton>

                {hasSubItems && (
                  <>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuAction className="data-[state=open]:rotate-90">
                        <ChevronRight />
                        <span className="sr-only">Toggle</span>
                      </SidebarMenuAction>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton
                              asChild
                              className={`${
                                isActive(subItem.url)
                                  ? "bg-primary/10 text-primary font-medium"
                                  : ""
                              }`}
                            >
                              <NavLink to={subItem.url}>
                                <span>{subItem.title}</span>
                              </NavLink>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </>
                )}
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
