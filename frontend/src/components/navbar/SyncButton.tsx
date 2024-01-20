import { Button, Tooltip, message } from "antd";
import "./sync.css";
import { useSyncMutation } from "../../store/products/product.slice";

const SyncButton = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [sync, { isLoading }] = useSyncMutation();
  const handleSync = async () => {
    try {
      await sync({ data: {} }).unwrap();
      messageApi.success("Sync successful!");
    } catch (err) {
      messageApi.error("Sync failed:" + JSON.stringify(err));
    }
  };
  return (
    <Tooltip title="Sync products">
      {contextHolder}
      <Button
        loading={isLoading}
        onClick={handleSync}
        type="default"
        id="sync-button"
        icon={<img src="/uil_sync.svg" id="sync-icon" />}
      />
    </Tooltip>
  );
};

export default SyncButton;
