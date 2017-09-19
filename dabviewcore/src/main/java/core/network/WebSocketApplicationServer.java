package core.network;

import com.google.inject.Inject;
import core.logging.interfaces.Logger;
import core.network.interfaces.ApplicationServer;
import org.java_websocket.WebSocket;
import org.java_websocket.handshake.ClientHandshake;
import org.java_websocket.server.WebSocketServer;

import java.net.InetSocketAddress;

public class WebSocketApplicationServer extends WebSocketServer implements ApplicationServer {

    private final Logger logger;

    @Inject
    public WebSocketApplicationServer(Logger logger) {
        super(new InetSocketAddress(8080));
        this.logger = logger;
    }

    public void onOpen(WebSocket webSocket, ClientHandshake clientHandshake) {

    }

    public void onClose(WebSocket webSocket, int i, String s, boolean b) {

    }

    public void onMessage(WebSocket webSocket, String s) {

    }

    public void onError(WebSocket webSocket, Exception e) {
        logger.logException(e);
    }

    public void onStart() {
        logger.log("WebSocket started");
    }

    public void start() {
        logger.log("Starting WebSocket server");
        super.start();
    }
}
