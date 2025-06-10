export type Performance = {
  playID: string;
  audience: number;
  play?: Play; // Optional property to hold the play details
  amount?: number;
  volumeCredits?: number;
};

export type Invoice = {
  customer: string;
  performances: Performance[];
};
export type Play = {
  name: string;
  type: string;
};

export type Plays = {
  [key: string]: Play;
};

export type StatementData = {
  customer: string;
  totalAmount?: number;
  totalVolumeCredits?: number;
  performances: Performance[];
};