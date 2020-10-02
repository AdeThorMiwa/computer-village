import styled from 'styled-components';
import Colors from '../../resource/color';

export const FAQTableContainer = styled.table`

    tr { 
        width: 100%;
    }

    td {
        width: 33.3%;
        max-width: 33.3%;
        vertical-align: top !important;
        padding-bottom: 52px;
    }

    .__table-header {
        color: ${Colors.Primary};
        text-transform: uppercase;
        font-size: 18px;
        font-weight: bold;
    }

    .__table-question {
        font-size: 15px
    }

    .__table-answer {
        color: ${Colors.Secondary};
        font-size: 14px;
        line-height: 1.7;
    }
`;