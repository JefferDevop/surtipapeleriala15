import { TopBarAdmin, TopBar } from "../../components";
import { useAuth } from "@/hooks/useAuth"; 

export function BasicLayout(props) {
  const { user } = useAuth();
  
  const {
    children,
    isOpenSearch = false,
  } = props;

  return (
    <>
      {user?.is_staff ? (
        <>
          <TopBarAdmin isOpenSearch={isOpenSearch} />
          {children}
        </>
      ) : (
        <>
          <TopBar isOpenSearch={isOpenSearch} />
          {children}
        </>
      )}
    </>
  );
}
