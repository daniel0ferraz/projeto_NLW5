import { io } from "../http";
import { ConnetionsService } from "../services/ConnectionsService";




io.on("connect", (socket) => {
  const connectionsService = new ConnetionsService();

  const allConnectionsWithoutAdmin = await connectionsService.findAllWithoutAdmin();
})
