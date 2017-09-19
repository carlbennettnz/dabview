package core.api;

public abstract class ApplicationBase {

    /**
     * This is the main lifecycle hook for a core.DabVIEW application.
     * It is executed on it's own thread and therefore does not need to return.
     */
    protected abstract void onRunApplication();

    /**
     * This is the only notification an application will receive before being forcefully stopped.
     *
     * If after a set timeout interval the application has not terminated all active threads, the application
     * threads will be stopped. Failing stopping the application threads, the JVM will be reset.
     */
    protected abstract void beforeStop();
}
