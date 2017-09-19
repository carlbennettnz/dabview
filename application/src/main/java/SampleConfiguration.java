import com.google.inject.AbstractModule;
import core.api.ApplicationBase;
import core.api.BaseConfiguration;

public class SampleConfiguration implements BaseConfiguration {

    public AbstractModule[] getModuleConfiguration() {
        return new AbstractModule[] {
                new SampleApplicationModule()
        };
    }

    private class SampleApplicationModule extends AbstractModule {

        @Override
        protected void configure() {
            bind(ApplicationBase.class).to(SampleApplication.class);
        }
    }

}
