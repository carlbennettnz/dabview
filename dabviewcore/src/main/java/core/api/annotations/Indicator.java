package core.api.annotations;

import java.lang.annotation.ElementType;
import java.lang.annotation.Target;

@Target({ElementType.FIELD})
public @interface Indicator {
    String frontPanelLabel();
}
